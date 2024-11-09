const loadData = async () => {
  const res =
    await fetch`https://openapi.programming-hero.com/api/videos/category/1000`;
  const data = await res.json();
  const catagories = data.data;
  DisplayAllCatagory(catagories);
};
const DisplayAllCatagory = (catagories) => {
  //   console.log(catagories);
  //   console.log("all btn clicked");document.getElementById("show-all-container").style.display = "none";
  document.getElementById("Music-container").style.display = "none";
  document.getElementById("Comedy-container").style.display = "none";
  document.getElementById("Drawing-container").style.display = "none";

  // Show the Music-container only
  document.getElementById("show-all-container").style.display = "grid";

  catagories.forEach((catagory) => {
    console.log(catagory);
    const catagoryContainer = document.getElementById("show-all-container");
    const catagoryCard = document.createElement("div");
    catagoryCard.classList = `card w-70 gap-12 mt-6 bg-gray-100 shadow-xl`;
    catagoryCard.innerHTML = `
       <figure>
                <img class="w-full mb-6"
                  src="${catagory.thumbnail}"
                   alt="Shoes" />
               </figure>
               <div class="card-body">
               <div class="flex gap-2">
               <img src="${catagory.authors[0].profile_picture}" alt="Author Profile Picture" style="width: 30px; height: 30px; border-radius: 50%;">
               <h2 class="card-title">${catagory.title}</h2>
              </div>
               <div class="mb-8 ">
               <p class="text-xl">${catagory.authors[0].profile_name}</p>
                
                 <p class="p">${catagory.others.views}</p>

              </div>

               </div>`;
    catagoryContainer.appendChild(catagoryCard);
  });
};
// hanle show all btn details
const handleMusicDetails = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await res.json();
    const categoryDetails = data.data;

    if (categoryDetails && categoryDetails.length > 0) {
      showMusicDetails(categoryDetails);
    } else {
      console.warn("No details found for this category.");
    }
  } catch (error) {
    console.error("Error fetching music details:", error);
  }
};
const showMusicDetails = (categoryDetails) => {
  document.getElementById("show-all-container").style.display = "none";
  document.getElementById("Comedy-container").style.display = "none";
  document.getElementById("Drawing-container").style.display = "none";

  // Show the Music-container only
  document.getElementById("Music-container").style.display = "grid";

  const showMusicContainer = document.getElementById("Music-container");
  showMusicContainer.innerHTML = " "; // Clear previous content

  // Filter the data to only include items with category_id "1001"
  const filteredDetails = categoryDetails.filter(
    (category) => category.category_id === "1001"
  );

  filteredDetails.forEach((category) => {
    if (category) {
      const MusicCard = document.createElement("div");
      MusicCard.classList = `card w-70 gap-12 bg-gray-100 shadow-xl`;
      MusicCard.innerHTML = `
          <figure>
            <img class="w-full mb-6" src="${category.thumbnail}" alt="${category.title}" />
          </figure>
          <div class="card-body">
            <div class="flex gap-2">
             <img src="${category.authors[0].profile_picture}" alt="Author Profile Picture" style="width: 30px; height: 30px; border-radius: 50%;">
               <h2 class="card-title">${category.title}</h2>
              </div>
                    <h2 class="card-title">${category.authors[0].profile_name}</h2>
            <p>Views: ${category.others.views}</p>
            
          </div>
        `;
      showMusicContainer.appendChild(MusicCard);
    }
  });
};
const handleComedyDetails = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await res.json();
    const categoryDetails = data.data;

    if (categoryDetails && categoryDetails.length > 0) {
      showComedyDetails(categoryDetails);
    } else {
      console.warn("No details found for this category.");
    }
  } catch (error) {
    console.error("Error fetching comedy details:", error);
  }
};
const showComedyDetails = (categoryDetails) => {
  document.getElementById("show-all-container").style.display = "none";
  document.getElementById("Music-container").style.display = "none";
  document.getElementById("Drawing-container").style.display = "none";

  // Show the Music-container only
  document.getElementById("Comedy-container").style.display = "grid";

  const showComedyContainer = document.getElementById("Comedy-container");
  showComedyContainer.innerHTML = " "; // Clear previous content

  // Filter the data to only include items with category_id "1001"
  const filteredDetails = categoryDetails.filter(
    (category) => category.category_id === "1003"
  );

  filteredDetails.forEach((category) => {
    if (category) {
      const ComedyCard = document.createElement("div");
      ComedyCard.classList = `card w-70 gap-12 bg-gray-100 shadow-xl`;
      ComedyCard.innerHTML = `
          <figure>
            <img class="w-full mb-6" src="${category.thumbnail}" alt="${category.title}" />
          </figure>
          <div class="card-body">
      
            <div class="flex gap-2">
             <img src="${category.authors[0].profile_picture}" alt="Author Profile Picture" style="width: 30px; height: 30px; border-radius: 50%;">
               <h2 class="card-title">${category.title}</h2>
              </div>
                    <h2 class="card-title">${category.authors[0].profile_name}</h2>
            <p>Views: ${category.others.views}</p>
           
          </div>
        `;
      showComedyContainer.appendChild(ComedyCard);
    }
  });
};

function handleDrawingDetails() {
  const showComedyContainer = document.getElementById("Drawing-container");
  showComedyContainer.innerHTML = " "; // Clear previous content
  //   console.log("drawing btn clicked");
  document.getElementById("show-all-container").style.display = "none";
  document.getElementById("Music-container").style.display = "none";
  document.getElementById("Comedy-container").style.display = "none";

  //   // Show the Dwaing-container only
  document.getElementById("Drawing-container").style.display = "grid";
  const drawingDetails = document.getElementById("Drawing-container");
  const drawingCard = document.createElement("div");
  drawingCard.classList = `card w-3/4  gap-12 text-center shadow-xl`;
  drawingCard.innerHTML = `
  <img class="w-80 px-8 justify-center" src="Icon.png" alt="" srcset="" />
<h2>Oops!! Sorry, There is no content here</h2>
`;
  drawingDetails.appendChild(drawingCard);
}
// loadData();
