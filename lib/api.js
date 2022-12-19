const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}
export async function getAllRestaurants() {  // const data = result of fetchAPI function, which has the graphQL in it. fetchAPI is the function above
	//holding a graphQL query about getting restaurants from wp site. graph is more efficient than rest API which comes built with wordpress
    //this goes to env.development
    const data = await fetchAPI(`
    query NewQuery {
      restaurants {
      edges {
          node {
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          restaurantTypes {
              edges {
              node {
                name
              }
              }
          }
          }
      }
      }
  }
    `) // this is from graphiQL on wordpress backend. the one on the left
	return data?.restaurants.edges // loop through edges, which has node title excerpt
}

export async function getAllRestaurantSlugs() {
  const data = await fetchAPI(`
    query NewQuery {
        restaurants {
          edges {
            node {
              slug
            }
          }
        }
      }`)
	return data?.restaurants.edges
}
// get static props: function to fetch data before whole page displays on front end of website. if included in page templates, it will be invoked first before page gets loaded into browser. 

 // building up list of acceptable slugs that js can build ahead of time

export async function getSingleRestaurantBySlug(id) {
    const data = await fetchAPI(`
    query MyQuery($id: ID!) {
      restaurant(idType: URI, id: $id) {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height 
            }
          }
        }
        restaurantInformation {
          location {
            streetAddress
            city
            state
            zipCode
          }
          contact {
            emailAddress
            phoneNumber
          }
          hours {
            monday {
              closeTime
              openTime
            }
            saturday {
              closeTime
              openTime
            }
            friday {
              openTime
              closeTime
            }
            sunday {
              closeTime
              openTime
            }
            thursday {
              closeTime
              openTime
            }
            tuesday {
              closeTime
              openTime
            }
            wednesday {
              closeTime
              openTime
            }
          }
          menu {
            menuItems {
              menuItem {
                description
                price
                title
                image {
                  altText
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
    `, {
        variables: {
          "id": id
        }
      })
      return data?.restaurant
    }

// when you add items, if it's not working, reset server 

export async function getAllRestaurantTypes() {
  const data = await fetchAPI(`
    query NewQuery {
      restaurantTypes {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  return data?.restaurantTypes.edges
}