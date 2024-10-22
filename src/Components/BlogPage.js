import React from 'react';
import { useTranslation } from 'react-i18next';
import './BlogPage.css'; // Import your CSS file
import img1 from './Imgs/img.png'; 
import img2 from './Imgs/hero.webp'; 
import img3 from './Imgs/little-girl-reading-book-with-her-teddy-bears.jpg'; 
import img4 from './Imgs/Happy Child with Teddy Bear.jpg'; 
import img5 from './Imgs/daughter-spending-time-with-her-father-home.webp'; 
import img6 from './Imgs/why.webp'; 

const blogImages = [img1, img2, img3, img4, img5, img6];

const BlogPage = () => {
  const { t, i18n } = useTranslation(); // Initialize translation and i18n

  const blogPosts = [
    {
      id: 1,
      title: t('blogs.blogPost1.title'),
      description: t('blogs.blogPost1.description'),
      image: blogImages[0],
    },
    {
      id: 2,
      title: t('blogs.blogPost2.title'),
      description: t('blogs.blogPost2.description'),
      image: blogImages[1],
    },
    {
      id: 3,
      title: t('blogs.blogPost3.title'),
      description: t('blogs.blogPost3.description'),
      image: blogImages[2],
    },
    {
      id: 4,
      title: t('blogs.blogPost4.title'),
      description: t('blogs.blogPost4.description'),
      image: blogImages[3],
    },
    {
      id: 5,
      title: t('blogs.blogPost5.title'),
      description: t('blogs.blogPost5.description'),
      image: blogImages[4],
    },
    {
      id: 6,
      title: t('blogs.blogPost6.title'),
      description: t('blogs.blogPost6.description'),
      image: blogImages[5],
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="section-title">{t('blogs.sectionTitle')}</h1>
      <div className="blogs-container">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-description" style={{ fontSize: i18n.language === 'ar' ? '22px' : 'inherit' }}>
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
