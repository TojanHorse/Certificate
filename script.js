// List of participants
const participants = {
  volunteer: ["Aditya Uniyal",
  "Ayush Parandiyal",
  "Ritik Singhal",
  "Shlok Arora",
  "Prajakta Pokhriyal",
  "Varsha Bisht",
  "Charu",
  "Taniya",
  "Shobhit",
  "Honey",
  "Samayk",
  "Akshat Maheshwari",
"Devashish Singh",
  "Anant Gupta",
  "Ankur Verma",
  "Astha Katiyar",
  "Rahul Rawat",
  "Vaishnavi Purohit",
  "Ayushi Uniyal",
  "Soumya",
"Vanshika Thapa",
"Vansh Tomar",
"Silky Saurabh",
"Sidharth Kumar",
"Abhijeet Narayan"],
  organizer: ["Bobby Singh", "Rahul Bijalwan", "Sneha Payal","Shrishti Chauhan","Ayush Singh","Kritharth Devli","Utkarsh gaur","Sumit Srivastav"]
};

function checkAndDownload() {
  const fullName = document.getElementById("fullName").value.trim();
  const role = document.getElementById("role").value;
  const formattedName = fullName.replace(/ /g, "_");

  if (participants[role] && participants[role].includes(fullName)) {
      downloadCertificate(role, formattedName);
  } else {
      alert("You are not in the volunteer or organizer list.");
  }
}

function downloadCertificate(role, formattedName) {
  const extensions = ['pdf', 'jpg', 'jpeg', 'png'];
  let found = false;
  
  for (const ext of extensions) {
      const fileName = `${role}_${formattedName}.${ext}`;
      const filePath = `assets/${fileName}`;
      
      // Check if the file exists
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', filePath, false);
      xhr.send();
      
      if (xhr.status === 200) {
          const link = document.createElement("a");
          link.href = filePath;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          found = true;
          break;
      }
  }

  if (!found) {
      alert("Certificate file not found.");
  }
}
