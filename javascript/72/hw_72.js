/* global $ */
(function () {
    'use strict';

    const recipeOptionContainer = $('#recipeOptionContainer');
    const recipeContainer = $('#recipeContainer');
    const recipeName = $('#name');
    const recipeImage = $('#recipeImage');
    const recipeIngredients = $('#recipeDiv');

    fetch('hw_72_names.json')
        .then(response => response.json())
        .then(jResponse =>
            jResponse.forEach(addInput)
        );

    function addInput(newRecipe) {
        let name = newRecipe.name;
        let recipeHtml = $(`<input type="radio" id="${name}" name="recipeOption"><label for="${name}">${name}</label>`);

        recipeHtml.appendTo(recipeOptionContainer);
        recipeHtml.on('change', (event) => {
            const x = `hw_72_${event.target.id}.json`;
            console.log(x);
            fetch(x)
                .then(response => response.json())
                .then(jResponse => showRecipe(jResponse));
        });
    }

    function showRecipe(recipeJson) {
        recipeJson = recipeJson[0];

        recipeName.empty();
        recipeImage.empty();
        recipeIngredients.empty();

        recipeName.append(recipeJson.name);
        recipeImage.attr("src", recipeJson.url);
        for (let i = 0; i < recipeJson.recipe.length; i++) {
            recipeIngredients.append(`<li>${recipeJson.recipe[i]}</li>`);
        }
        
    }
}());