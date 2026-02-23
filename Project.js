import './Project.css';

function Project() {
  const data = [
    {
      title: "Crop Nutritional Deficiency Detection",
      description: "AI-Based Deep Learning System",
      summary:
        "Developed a deep learning model to detect and classify nutrient deficiencies in rice plants using image processing and machine learning techniques.",
      features: [
        "Image preprocessing and enhancement",
        "FCM segmentation for affected region detection",
        "ResNet for feature extraction",
        "ML model for classification"
      ],
      technologies: "React, Python, Flask, TensorFlow, Machine Learning"
    },
    {
      title: "Portfolio Website",
      description: "Personal Developer Portfolio",
      summary:
        "Designed and developed a responsive personal portfolio to showcase skills, projects, and certifications.",
      features: [
        "Responsive modern UI",
        "Animated background effects",
        "Project and certificate sections",
        "React Router navigation"
      ],
      technologies: "React.js, CSS, JavaScript"
    },
    {
      title: "REST API System",
      description: "Backend API Application",
      summary:
        "Built a RESTful API for handling user data and application operations with secure routing and database integration.",
      features: [
        "CRUD operations",
        "RESTful routing",
        "Database integration",
        "Error handling"
      ],
      technologies: "Node.js, Express.js, MySQL"
    }
  ];

  return (
    <div className="project-container">
      <h1 className="project-heading">My Projects</h1>

      <div className="project-grid">
        {data.map((item, index) => (
          <div className="project-card" key={index}>
            <h2>{item.title}</h2>
            <h4>{item.description}</h4>

            <p className="summary">{item.summary}</p>

            <div className="features">
              <h5>Features</h5>
              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="tech">
              <strong>Technologies:</strong>
              <span>{item.technologies}</span>
            </div>

            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;