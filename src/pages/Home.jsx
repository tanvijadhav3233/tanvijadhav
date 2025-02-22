import React from 'react';

const Home = () => {
  return (
    <div>
      
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image3.jpg" className="d-block w-100 " alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/image1.webp" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/image2.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
      {/* Recipe Cards */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        {recipes.map((recipe, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const recipes = [
  {
    image: "/Pav-Bhaji-Recipe.jpg",
    title: "Pav Bhaji Recipe",
    description:
      "Create a spice blend (masala) by grinding coriander seeds, cumin, peppercorns, cloves, cinnamon, cardamom, and dried chilies. Sauté onions, garlic, ginger, tomatoes, and a mix of vegetables, adding the spice blend. Simmer until thick and serve with buttered pav.",
  },
  {
    image: "/chiken tikka.jpeg",
    title: "Chicken Tikka Recipe",
    description:
      "Marinate boneless chicken cubes in yogurt, ginger-garlic paste, lemon juice, and spices. Grill or bake at 200°C until cooked and slightly charred. Garnish with coriander, lemon, and chaat masala. Serve with mint chutney.",
  },
  {
    image: "/palak-Paneer.jpg",
    title: "Palak Paneer Recipe",
    description:
      "Blanch spinach, blend it, then cook with sautéed onions, tomatoes, and spices. Add cream and paneer cubes, then simmer. Serve hot with naan or rice.",
  },
  {
    image: "/spicy-noodles-recipe.jpg",
    title: "Spicy Noodles Recipe",
    description:
      "Boil noodles, stir-fry with garlic, onions, chilies, and veggies. Toss with soy sauce, chili sauce, and vinegar. Garnish with green onions and sesame seeds.",
  },
];

export default Home;
