const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const axios = require('axios');

// fetch('https://api.github.com/users').then(response => {
//     response.json().then(function (data) {
//         setUsers(data);
//     });
// })
const get = (id) => axios.get(`https://api.github.com/users/${id}`);

const getPokemonData = ids =>
    Promise.all(
        ids.map(async id => {
            const { data: userData } = await get(id);
            console.log('userData', JSON.stringify(userData, 10))
            return userData;
        })
    );

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type == "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "posts" });
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
        // console.log('inside',node.internal.type);
    }
    // console.log('outside',node.internal.type);
}

exports.createPages = ({ graphql, actions }) => {

}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // `getPokemonData` is a function that fetches our data
    const allPokemon = await getPokemonData(["1", "2", "3"])
    // Create a page that lists all Pokémon.
    createPage({
        path: `/pokemon`,
        component: require.resolve("./src/layout/Pokemon/AllPokemon.js"),
        context: { allPokemon },
    })
    // Create a page for each Pokémon.

    allPokemon.forEach(pokemon => {
        createPage({
            path: `/pokemon/${pokemon.id}/`,
            component: require.resolve("./src/layout/Pokemon/Pokemon.js"),
            context: { pokemon },
        })
    })

    return graphql(
        `
        {
            allMarkdownRemark {
            nodes{
                fields{
                slug
                }
            }
            }
        }
    `
    ).then(result => {
        result.data.allMarkdownRemark.nodes.forEach((node) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/layout/BlogpostLayout/BlogpostLayout.jsx'),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}
