import React from "react";
import "./UserReview.css";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aarav Mehta",
    title: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    date: "April 5, 2025",
    comment:
      "This platform made certificate generation so easy and instant! Highly recommended.",
  },
  {
    name: "Riya Sharma",
    title: "Project Manager",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    date: "March 22, 2025",
    comment:
      "I love how professional the certificates look. Great experience overall!",
  },
  {
    name: "Kunal Verma",
    title: "Data Analyst",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    date: "February 18, 2025",
    comment:
      "User-friendly and absolutely free. What more could you want? Superb!",
  },
];

const UserReview = () => {
  return (
    <section className="user-reviews" id="reviews">
      <h2 className="review-heading">What Users Are Saying</h2>
      <p className="reviews-subtitle">
        <span className="star-icon">★</span>
        Our users love the simplicity, speed, and flexibility of Shrash-Tech
        Certificate Generator. See what they have to say!
        <span className="star-icon">★</span>
      </p>
      <div className="reviews-container">
        {reviews.map((user, index) => (
          <div key={index} className="review-card">
            <img src={user.image} alt={user.name} className="user-image" />
            <div className="review-content">
              <h3>{user.name}</h3>
              <p className="user-title">{user.title}</p>
              <div className="stars">
                {[...Array(user.rating)].map((_, i) => (
                  <Star key={i} fill="#facc15" stroke="#facc15" size={16} />
                ))}
              </div>
              <p className="review-date">{user.date}</p>
              <p className="comment">“{user.comment}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserReview;
