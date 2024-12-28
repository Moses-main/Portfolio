module.exports = (req, res) => {
  // Define the data for projects and skills
  const projects = [
    {
      title: "Mini Blog App",
      description:
        "A blog web app built with Node, Express, and MongoDB. Features authentication and CRUD operations.",
      image: "/image/blog_app (1).png",
      link: "https://blog-app-4otp.onrender.com/",
    },
    {
      title: "Catch Them Young",
      description:
        "Built a website for an entrepreneur training organization using React.js, Tailwind CSS, and Git. The site features a responsive design and is hosted on Vercel for optimal performance and scalability",
      image: "/image/catch_them_young.png",
      link: "https://catch-them-young.vercel.app/",
    },
    {
      title: "Rhino-Homes",
      description:
        "Real estate website built with Next.js, React, Tailwind CSS, and Framer Motion for responsive design, smooth animations, and dynamic property listings.",
      image: "/image/Rhino_homes.png",
      link: "https://rhino-homes.vercel.app/",
    },
    // {
    //   title: "Explore Web3",
    //   description: "A platform to explore all about Web3.",
    //   image: "/image/explore_web3.png",
    //   link: "https://moses-main.github.io/web3-landing-page/",
    // },
    {
      title: "Chat Room App",
      description:
        "A real-time chat room app built with Express.js, Node.js, and Socket.IO. Features multiple users, activity management, and chat rooms.",
      image: "/image/chatApp.png",
      link: "https://chat-app-os0m.onrender.com/",
    },
    {
      title: "Todo List App",
      description: "A todo list app built with Laravel and MySQL database.",
      image: "/image/Todo_app.png",
      link: "https://github.com/Moses-main/Todo-app",
    },
    {
      title: "QR Code Generator",
      description:
        "A QR Code generator built with Python, JavaScript, HTML, and Bootstrap.",
      image: "/image/QR_Code_Generator.png",
      link: "https://chizaram.pythonanywhere.com/",
    },
    {
      title: "Certificate Generator",
      description:
        "A downloadable certificate generator built with React.js and Material UI.",
      image: "/image/certificate_gen.png",
      link: "https://tublian-internship-certificate.vercel.app/",
    },
    {
      title: "Web3 E-Commerce Store",
      description:
        "An online supermarket landing page for transactions using cryptocurrencies and tokens.",
      image: "/image/web3_e_commerce.png",
      link: "https://moses-main.github.io/web3-ecommerce/",
    },
    {
      title: "Prime College Schools",
      description:
        "A modern website for Prime College built with React.js, JavaScript, and Tailwind CSS.",
      image: "/image/prime-college.png",
      link: "https://prime-college.vercel.app/",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
    "PHP",
    "Python",
    "JavaScript",
    "MySQL",
    "Express.js",
    "Git",
    "Solidity",
    "jQuery",
    "React.js",
    "Material UI",
    "Bootstrap",
    "Composer",
    "Laravel",
  ];

  // const contact = [
  //   "links" = {
  //     "twitter": "https://x.com/Moses_Sunday_?t=Hv8h-r...",
  //     "linkedin": "https://linkedin.com/in/your-profile",
  //     "github": "https://github.com/Moses-main"
  //   }];

  // Pass the data to the template
  res.render("portfolio", {
    pageTitle: "Portfolio",
    projects,
    skills,
  });
};
