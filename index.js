const data = [
  {
    name: "Sarang jain",
    designation: "full-stack developer",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloribus voluptatibus odit exercitationem possimus facere aperiam ea harum ipsum asperiores, nostrum provident quas eius, dolore saepe blanditiis nihil? Ab facere doloremque laudantium cupiditate voluptate nisi sit! Iusto quam repudiandae voluptatum nesciunt et molestiae possimus provident nisi ea sed! Impedit, magnam?",
    color: "blueviolet",
    img: "https://images.pexels.com/photos/18695366/pexels-photo-18695366/free-photo-of-bearded-man-sitting-on-jeep.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Gunjan jain",
    designation: "backend developer",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloribus voluptatibus odit exercitationem possimus facere aperiam ea harum ipsum asperiores, nostrum provident quas eius, dolore saepe blanditiis nihil? Ab facere doloremque laudantium cupiditate voluptate nisi sit! Iusto quam repudiandae voluptatum nesciunt et molestiae possimus provident nisi ea sed! Impedit, magnam?",
    color: "blue",
    img: "https://images.pexels.com/photos/3760707/pexels-photo-3760707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ojjasvi jain",
    designation: "software developer",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloribus voluptatibus odit exercitationem possimus facere aperiam ea harum ipsum asperiores, nostrum provident quas eius, dolore saepe blanditiis nihil? Ab facere doloremque laudantium cupiditate voluptate nisi sit! Iusto quam repudiandae voluptatum nesciunt et molestiae possimus provident nisi ea sed! Impedit, magnam?",
    color: "deeppink",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

let commentRef = document.getElementsByClassName("comment");
let personalImgRef = document.getElementsByClassName("personalimg");
let nameRef = document.getElementsByClassName("name");
let designationRef = document.getElementsByClassName("designation");
let containerRef = document.getElementsByClassName("container");

let profile = 0;
const changeDetails = () => {
  let { name, designation, comment, color, img } = data[profile];

  if (profile === data.length - 1) profile = 0;
  else profile++;

  commentRef[0].textContent = comment;
  designationRef[0].textContent = designation;
  nameRef[0].textContent = name;
  personalImgRef[0].src = img;
  containerRef[0].style.backgroundColor = color;
};

setInterval(() => {
  changeDetails();
}, 10000);
