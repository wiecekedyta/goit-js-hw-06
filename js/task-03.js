const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");


const img = images
  .map((image) => `<li><img src="${image.url}" alt = "${image.alt}" width = "400" /></li>`)
  .join("")
  
  gallery.style.maxWidth = "500px";
  gallery.style.padding = "50px 50px";
  gallery.style.backgroundColor = "teal";
  gallery.style.display = "flexBlock";
  gallery.style.gap = "30px";
  gallery.style.flexWrap = "wrap";
  gallery.style.listStyleType = "none";
  

  gallery.innerHTML = img;

 