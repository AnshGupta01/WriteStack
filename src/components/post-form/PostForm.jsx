import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, RTE, Select } from '..';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Grid, Paper, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import UpdateIcon from '@mui/icons-material/Update';

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.$id || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    // Ensure slug is Appwrite-safe (<=36 chars, alnum/hyphen, no leading hyphen)
    data.slug = slugTransform(data.slug);
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        // Keep existing image if none uploaded
        featuredImage: file ? file.$id : post.featuredImage,
        // Preserve ownership on update
        userId: post.userId,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      if (!userData) {
        console.error('User not authenticated');
        return;
      }

      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (!value || typeof value !== 'string') return 'post';

    const cleaned = value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]+/g, '') // keep alnum, spaces, hyphens
      .replace(/\s+/g, '-') // spaces to hyphen
      .replace(/-+/g, '-') // collapse hyphens
      .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphen

    const safe = cleaned || 'post';
    return safe.slice(0, 36); // Appwrite rowId limit
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        {post ? 'Edit Post' : 'Create New Post'}
      </Typography>
      <form onSubmit={handleSubmit(submit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Input
                label="Title"
                placeholder="Enter post title"
                {...register('title', { required: true })}
              />
              <Input
                label="Slug"
                placeholder="post-url-slug"
                {...register('slug', { required: true })}
                onInput={(e) => {
                  setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
              />
              <RTE label="Content" name="content" control={control} defaultValue={getValues('content')} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Input
                label="Featured Image"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register('image', { required: !post })}
              />
              {post && (
                <Box
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </Box>
              )}
              <Select
                options={['active', 'inactive']}
                label="Status"
                {...register('status', { required: true })}
              />
              <Button
                type="submit"
                variant="contained"
                color={post ? 'success' : 'primary'}
                fullWidth
                size="large"
                startIcon={post ? <UpdateIcon /> : <SaveIcon />}
              >
                {post ? 'Update Post' : 'Publish Post'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}