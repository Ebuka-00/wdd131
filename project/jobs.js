const jobs = [
  {
    title: "Backend Developer",
    company: "TechNova",
    location: "Remote"
  },
  {
    title: "Frontend Developer",
    company: "Digital Hub",
    location: "Lagos"
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Abuja"
  }
];

const jobsContainer = document.getElementById("jobsContainer");
const searchInput = document.getElementById("search");

function displayJobs(jobList) {
  jobsContainer.innerHTML = "";

  jobList.forEach((job) => {
    jobsContainer.innerHTML += `
      <div class="card">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <button class="save-btn" data-job="${job.title}">
          Save Job
        </button>
      </div>
    `;
  });

  addSaveEvents();
}

function addSaveEvents() {
  const buttons = document.querySelectorAll(".save-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      localStorage.setItem("favoriteJob", button.dataset.job);
      alert(`${button.dataset.job} saved`);
    });
  });
}

searchInput.addEventListener("input", () => {
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(
      searchInput.value.toLowerCase()
    )
  );

  displayJobs(filtered);
});

displayJobs(jobs);