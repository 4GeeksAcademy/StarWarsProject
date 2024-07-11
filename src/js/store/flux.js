const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],

			vehicle: [],

			planets: [],

			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchPeople: async () => {
				const response = await fetch ('https://www.swapi.tech/api/people');
				const data = await response.json();
				setStore({people: data.results})
			},
			fetchVehicles: async () => {
				const response = await fetch ('https://www.swapi.tech/api/vehicles');
				const data = await response.json();
				setStore({vehicles: data.results})
			},
			fetchPlanets: async () => {
				const response = await fetch ('https://www.swapi.tech/api/planets');
				const data = await response.json();
				setStore({planets: data.results})
			},
			addFavorite: item => {
				const store = getStore();
				setStore({favorites: [...store.favorites, item]})
			},
			removeFavorite: item => {
				const store = getStore();
				setStore({favorites: store.favorites.filter(favorite => favorite.uid !== item.uid)});
			} 
		}
	};
};

export default getState;
