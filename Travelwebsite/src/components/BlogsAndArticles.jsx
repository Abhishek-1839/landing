import React from 'react';
// import './BlogsAndArticles.css'; // Import CSS file for styling
import im1 from "../images/pexels-rishi-ramoutar-3463164-5176713.jpg"
import im2 from "../images/pexels-vincent-gerbouin-445991-1174732.jpg"

const BlogCard = ({ title, content, author, date, imageUrl }) => {
  return (
    <div className='reviews'>
    <div className='rev1'>
    <img src={imageUrl} alt=''/>
    <h1>{title}</h1>
    <p>{content}</p>
    <h5>{author} </h5>
    <p>{date}</p>
    

    
    <button>Read more</button>
    </div>
</div>
  );
};

const BlogsAndArticles = () => {
  const blogs = [
    {
      title: "Exploring the Wonders of Machu Picchu",
      content: "Discover the ancient ruins of Machu Picchu and immerse yourself in the history and culture of the Inca civilization.Immerse yourself in the allure of Machu Picchu through the eyes of travelers who have ventured to this mystical site. From breathtaking panoramic views to the intricate stonework of ancient temples, discover why Machu Picchu continues to captivate adventurers and historians alike.  ......",
      author: "John Doe",
      date: "May 12, 2024",
      imageUrl: im1 // Image URL or path
    },
    {
      title: "Top 10 Beach Destinations for Summer Getaways",
      content: "Escape the ordinary and dive into the extraordinary with our curated list of the top 10 beach destinations for summer getaways and vacations. From pristine white sands to azure waters, embark on a journey to paradise and discover the ultimate seaside retreats that promise sun, surf, and unforgettable memories.   ......",
      author: "Jane Smith",
      date: "June 5, 2024",
      imageUrl: im2 // Image URL or path
    }
    // Add more blog objects as needed
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 blhead">Latest Blogs and Articles</h2>
      <div className="card-deck">
        {blogs.map((blog, index) => (
          <BlogCard 
            // key={index}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            date={blog.date}
            imageUrl={blog.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsAndArticles;
