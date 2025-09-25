const jobs = [
  { title: "Frontend Developer", company: "TechSoft", location: "Bhopal", link: "#" },
  { title: "Data aakash pathrol", company: "Capri Global", location: "Indore", link: "#" },
  { title: "Backend Engineer", company: "Paytm", location: "Delhi", link: "#" },
  { title: "Computer Operator", company: "IDFC Bank", location: "Bhopal", link: "#" }
];

const jobList = document.getElementById("job-list");
const search = document.getElementById("search");

function displayJobs(filter = "") {
  jobList.innerHTML = "";
  jobs
    .filter(job => job.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(job => {
      jobList.innerHTML += `
        <div class="job-card">
          <h2>${job.title}</h2>
          <p>🏢 ${job.company}</p>
          <p>📍 ${job.location}</p>
          <a href="${job.link}" class="apply-btn">Apply Now</a>
        </div>
      `;
    });
}

search.addEventListener("input", (e) => {
  displayJobs(e.target.value);
});

displayJobs();
