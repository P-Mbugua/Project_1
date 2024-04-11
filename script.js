fetch("http://localhost:5000/posts")
    .then((data) =>data.json())
    .then((posts) =>{
        let cardsContainer = document.getElementById("cardsContainer");
      
        for (post of posts) {
          cardsContainer.innerHTML +=` 
          
          <div class="block mx-auto max-w-sm p-1 mb-5  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
         
          <img src="${post.img}" class=" h-40 w-80" alt=""> 
          
                           
          <div class="flex justify-between">
          <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">${post.title}</h5>
          <h5 class="mb-2  tracking-tight text-gray-900 dark:text-white">  ${post.Likes} <button><i id="like" class='bx bxs-heart'></i></button>
          </h5>
          </div>

             <div class="flex justify-between">
          <i onClick="deletePost(${post.id})" class='bx bxs-trash text-2xl text-red-700'></i>
          <i onClick="editPost(${post.id})" class='bx bxs-edit-alt text-2xl text-blue-700 ' ></i>
          </div>  
          <p class="font-normal text-gray-700 dark:text-gray-400">${post.slogan}</p>
          </div>`         
        }
    })


      function editPost (id) {
        fetch("http://localhost:5000/posts")
        .then((data) =>data.json())
        .then((post) =>{
       
      const updateProducts = document.getElementById("update-products");
            updateProducts.innerHTML = `
                <form id="form" class="max-w-md mx-auto">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" value="${post.title}" name="title" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" value="${post.slogan}" name="slogan" id="slogan" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Slogan</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" value="${post.img}" name="image" id="products" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                </div>
              
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form> 
            `
        
    })
// udate

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault()
    const title = document.getElementById("title").value
    const products = document.getElementById("products").value
    const slogan = document.getElementById("slogan").value

          fetch(`http://localhost:5000/posts${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: title, slogan: slogan, img: products, likes: 0 })
          })
            .then((data) =>data.json())
            .then((response) =>{
              
            })
})

      }











      function deletePost(id) {
        fetch(`http://localhost:5000/posts/${id}`, {
          method: "DELETE"
        })
              .then((data) =>data.json())
              .then((posts) =>{
                  let cardsContainer = document.getElementById("cardsContainer");
            })
              }
  
    


              document.getElementById("form").addEventListener("submit", (event) => {
                event.preventDefault()
                  const title = document.getElementById("title").value
                  const products = document.getElementById("products").value
                  const slogan = document.getElementById("slogan").value

                        fetch("http://localhost:5000/posts", {
                          method: "POST",
                          headers: {"Content-Type": "application/json"},
                          body: JSON.stringify({title: title, slogan: slogan, img: products })
                        })
                          .then((data) =>data.json())
                          .then((response) =>{
                            
                          })
              })


              
             
 


  
























    // let likeButton = document.createElement("button");
    // likeButton.innerHTML = '<i id="like" class="bx bxs-heart"></i>';
    // likeButton.addEventListener("click", () => {
    //     // Increment likes count
    //     post.Likes = parseInt(post.Likes) + 1; // Convert Likes to number and increment
    //     likesCount.textContent = post.Likes;

    //     // Update likes count on the server
    //     fetch(`http://localhost:5000/posts/${post.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             Likes: post.Likes
    //         })
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             console.log("Likes count updated successfully.");
    //         } else {
    //             console.error("Failed to update likes count on the server.");
    //         }
    //     })
    //     .catch(error => {
    //         console.error("Error:", error);
    //     });
    // });


    // <h5 class="mb-2  tracking-tight text-gray-900 dark:text-white ">${post.price}</h5>