import React from "react";


function Blog() {
  const blogs = [
    {
      id: 1,
      category: "Kitchen Ideas",
      title: "Turn Your Dream Kitchen Into Reality",
      description:
        "Discover how to design a modern kitchen with smart storage and beautiful finishes.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      id: 2,
      category: "Home Decor",
      title: "Top 5 Wall Decor Trends of 2025",
      description:
        "Explore the newest wall decor trends to bring life and personality to your space.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      id: 3,
      category: "Storage Hacks",
      title: "Smart Storage Ideas for Small Kitchens",
      description:
        "Learn how to maximize every inch of your kitchen with clever organization solutions.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
  ];
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Latest From Our Blog</h1>
            <p className="text-muted">
             Get Expert Tips, Creative Ideas, and Inspiration To Design Your Perfect Kitchen.
            </p>
          </div>

          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-md-4" key={blog.id}>
                <div className="card border-0 shadow-sm blog-card h-100">
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <small className="text-uppercase text-primary fw-semibold">
                      {blog.category}
                    </small>
                    <h5 className="card-title mt-2">{blog.title}</h5>
                    <p className="card-text text-muted">{blog.description}</p>
                    <a
                      href={blog.link}
                      className="text-decoration-none fw-semibold text-primary"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
