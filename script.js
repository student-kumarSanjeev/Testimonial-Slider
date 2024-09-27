const testmonials = [
  {
    name: "Mr Robort",
    photourl:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I recently had the pleasure of working with SD Tech for my website development needs and I must say, I am thoroughly impressed.",
  },
  {
    name: "Mrs Alisa",
    photourl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I had the pleasure of working with SD Tech as a developer and I cannot recommend them enough. Their coding skills are top-notch and they consistently delivered high-quality work.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestmonilas() {
  const { name, photourl, text } = testmonials[idx];

  // Corrected typo: src instead of scr
  imgEl.src = photourl;
  textEl.innerText = text;
  usernameEl.innerText = name;

  idx = (idx + 1) % testmonials.length; // Reset idx to 0 if it exceeds the array length

  setTimeout(() => {
    updateTestmonilas();
  }, 6000);
}

updateTestmonilas(); // Call the function to start the updates
