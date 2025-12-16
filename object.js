const mobile = {
      brand : 'samsung',
      model : 'Galaxy S24',
      price : 120000,
      is5G : true
};
mobile.price=110000;
console.log(mobile.price);
console.log(mobile.brand);
console.log(mobile.is5G);
console.log(mobile['model']);



const myProfile = {
      name :"Bakir",
      level : 61,
      isPro : true,
      favoriteGame : "none",
      techStack : {
           language: "JavaScript",
           editor: "VS Code",
           typingSpeed: 40,
      },
      pcConfig :{
            ram :"16gb",
            brand : "hp",
      }

}
console.log(myProfile.pcConfig.ram);
console.log(myProfile ['techStack'] ['typingSpeed'])


const keys = Object.keys(myProfile);
console.log(keys);

const values = Object.values(myProfile.techStack);
console.log(values)