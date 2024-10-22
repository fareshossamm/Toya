import React from 'react';
import './BlogPage.css'; // Import your CSS file
import img1 from './Imgs/img.png'; 
import img2 from './Imgs/hero.webp'; 
import img3 from './Imgs/little-girl-reading-book-with-her-teddy-bears.jpg'; 
import img4 from './Imgs/Happy Child with Teddy Bear.jpg'; 
import img5 from './Imgs/daughter-spending-time-with-her-father-home.webp'; 
import img6 from './Imgs/why.webp'; 

const blogPosts = [
  {
    id: 1,
    title: 'The Power of Interactive Play in Child Development',
    description: 'Discover how interactive play with smart toys like Toya enhances cognitive abilities, builds emotional intelligence, and strengthens social skills, turning playtime into a key part of your child’s development.',
    image: img1,
  },
  {
    id: 2,
    title: 'How Smart Toys Can Encourage Emotional Growth in Children',
    description: 'Smart toys like Toya are changing the way children learn by making education interactive, engaging, and fun. Explore how technology is helping kids develop essential skills in new and exciting ways.',
    image: img2,
  },
  {
    id: 3,
    title: 'Integrating Smart Toys in Early Education',
    description: 'Discover how smart toys like Toya are shaping the future of early education by making learning fun, interactive, and personalized to your child’s needs.',
    image: img3,
  },
  {
    id: 4,
    title: 'Fostering Social Skills with Toya’s Conversations',
    description: 'Toya does more than entertain—it helps children develop social skills by engaging them in meaningful dialogues. Learn how this smart toy prepares kids for real-world interactions.',
    image: img4,
  },
  {
    id: 5,
    title: 'The Role of Technology in Modern Parenting',
    description: 'Technology isn’t just for adults—smart toys are reshaping how we approach parenting. Discover tips on how to integrate interactive tech like Toya into your parenting routine for better communication and learning.',
    image: img5,
  },
  {
    id: 6,
    title: 'Encouraging Creativity in Children with Toya',
    description: 'Unlock your child’s creative potential! See how Toya encourages imagination and creative thinking through storytelling, problem-solving, and role-playing games.',
    image: img6,
  },
];


const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1 className="section-title">Our Blogs</h1>
      <div className="blogs-container">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
