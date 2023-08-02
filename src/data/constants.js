export const projects = [
  {
    name: "Music streaming data pipeline",
    description:
      "A streaming data pipeline set up to monitor streams from a music event generator. Events are published to Apache Kafka and Apache Spark was configured to consume and process this data. View more about the project below",
    image_link: "https://scx2.b-cdn.net/gfx/news/hires/2016/578650fe544c4.jpg",
    year: 2023,
    skills: ["Apache Kafka", "Apache Spark", "Airflow", "Python", "Gcp"],
    github_link: "https://github.com/Adedotun-Adepoju/music-streaming-pipeline",
    demo_link:
      "https://public.tableau.com/views/MusicStreamsDashboard/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link",
    created_at: "2023-05-16T22:30:30.495Z",
    updated_at: "2023-05-16T22:30:30.495Z",
  },
  {
    name: "Football Stats ETL Pipeline",
    description:
      "A data pipeline set up to monitor the performances of teams in the English premier league by extracting raw data from API endpoints and transforming the raw data using python, Apache Airflow, BigQuery and DBT",
    image_link:
      "https://cdn.pixabay.com/photo/2016/05/27/14/33/football-1419954_1280.jpg",
    year: 2022,
    skills: ["Airflow", "DBT", "Python", "Gcp"],
    github_link: "https://github.com/Adedotun-Adepoju/football-stats-pipeline",
    demo_link:
      "https://lookerstudio.google.com/u/0/reporting/664607fb-989d-4077-aa1e-7a569f85cdb3/page/CAY9C?s=nwwjr72VXuo",
    created_at: "2023-05-16T22:30:12.889Z",
    updated_at: "2023-05-16T22:30:12.889Z",
  },
  {
    name: "Voice powered E-commerce site",
    description:
      "This is a Ruby on Rails 6 app intended to work as a vice powered e-commerce site. It is built on top of the google natural language API. It allows users to search for products with voice. Follow the following steps to set up locally.",
    image_link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLunbbnnCMjoY_dU51CSh5EAKGfXkYV-BAUg&usqp=CAU",
    year: 2023,
    skills: ["Rails", "HTML", "Css", "Javascript"],
    github_link: "https://github.com/Adedotun-Adepoju/e-commerce-site",
    demo_link: "https://github.com/Adedotun-Adepoju/e-commerce-site",
    created_at: "2023-05-16T22:30:30.495Z",
    updated_at: "2023-05-16T22:30:30.495Z",
  },
];

export const experiences = [
  {
    company: "b54",
    job_title: "Data Engineer",
    start_date: "2022-04-01",
    end_date: null,
    link: "https://b54.co/",
    roles: [
      "Ingested data from various sources. Implemented an automated ELT pipeline making it easier to wrangle data.",
      "Communicated with relevant stakeholders to understand needs, and translated feedbacks into actionable reports in Metabase",
      "Eliminated 80% of manual tasks for credit underwriting by engineering backend services to automate the risk and credit analysis process",
      "Integrated data from multiple third-party APIs that provided financial data, leading to better risk analysis.",
      "Developed machine learning models to predict the probability of loan defaults.",
      "Implemented Automated unit tests using test frameworks such as Jest and AdonisJS testing framework to ensure adequate coverage of the backend codebase",
    ],
  },
  {
    company: "Verraki",
    job_title: "Analyst",
    start_date: "2021-06-01",
    end_date: "2022-04-30",
    link: "https://verraki.africa/",
    roles: [
      "Cleaned and processed large datasets with python",
      "Analyzed various datasets to answer business questions",
      "Generated Tableau Dashboard charts to present key findings to stakeholders ",
    ],
  },
  {
    company: "iQube labs",
    job_title: "Data Science Intern",
    start_date: "2021-03-01",
    end_date: "2021-05-31",
    link: "https://www.iqubesolutions.com.ng/",
    roles: [
      "Developed a sentiment analysis project on data gotten from scraped tweets",
      "Created a web application in flask for accepting images from users and returning edge detected images to the user",
    ],
    created_at: "2023-05-16T22:27:53.850Z",
    updated_at: "2023-05-16T22:27:53.850Z",
  },
  {
    company: "Hamoye",
    job_title: "Data Science Intern",
    start_date: "2020-07-01",
    end_date: "2020-12-31",
    link: "https://hamoye.com/",
    roles: [
      "Engineered a linear regression model to predict the energy efficiency of buildings",
      "Implemented an ensemble machine learning model to classify the quality metrics of the ecological footprint data for different countries",
      "Created a multi-label classification model of satellite images in the amazon rainforest using Deep learning",
    ],
  },
];

export const skills = [
  {
    name: "Airflow",
    fileName: "airflow",
  },
  {
    name: "CSS",
    fileName: "css",
  },
  {
    name: "DBT",
    fileName: "dbt",
  },
  {
    name: "HTML",
    fileName: "html",
  },
  {
    name: "JavaScript",
    fileName: "javascript",
  },
  {
    name: "TypeScript",
    fileName: "typescript",
  },
  {
    name: "Python",
    fileName: "python",
  },
  {
    name: "SQL",
    fileName: "sql",
  },
  {
    name: "Docker",
    fileName: "docker",
  },
  {
    name: "Metabase",
    fileName: "metabase",
  },
];
