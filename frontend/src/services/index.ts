export const add_new_pokemon_card = async (formData: any) => {
    try {
        const res = await fetch(`http://localhost:8000/api/Add-pokemon-card`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Pokemon data (service) =>', error);
    }
}



export const get_all_pokemon_cards = async (page: number) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/get-pokemon-card?page=${page}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      return data?.data;
    } catch (error) {
      console.log("Error in getting Pokemon data (service) =>", error);
    }
  };


  export const delete_pokemon_card = async (id: string) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/delete-pokemon-card/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error in deleting Pokemon data (service) =>", error);
    }
  }



  export const get_specific_card_data = async (id: string) => {

    try {
      const res = await fetch(
        `http://localhost:8000/api/get-specific-card-data/${id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error in getting Pokemon specific card data (service) =>", error);
    }

  }



  export const update_pokemon_card = async (id: string, formData: any) => {

    try {
      const res = await fetch(
        `http://localhost:8000/api/update-pokemon-card/${id}`,
        {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error in updating Pokemon specific card data (service) =>", error);
    }


  }