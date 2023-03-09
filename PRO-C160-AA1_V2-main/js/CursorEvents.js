AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function() {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handleClickEvents: function() {
    //  Eventos de clic.
    this.el.addEventListener("click", evt => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("tour");

      if (state === "places-list") {
        const id = this.el.getAttribute("id");
        const placesId = [
          "taj-mahal",
          "budapest",
          "new-york-city",
          "eiffel-tower"
        ];
        if (placesId.includes(id)) {
          placesContainer.setAttribute("tour", {
            state: "view",
            selectedCard: id
          });
        }

      }
      if (state=="view") {
        this.mdi()
      }
      if (state=="change-view") {
        this.mdi()
      }
    });
  },

  mdi:function(){
    const el=this.el
    const idh=el.getAttribute("id")
    const gapllgb=document.querySelector("#places-container")
    const {selectedItemId}=gapllgb.getAttribute("cursor-listener")
    const iddci=["place-1.jpg","place-2.jpg","place-3.jpg","place-4.jpg"]
    if (iddci.includes(idh)) {
     gapllgb.setAttribute("tour",{state:"change-view"})
     const sky=document.querySelector("#main-container")
     sky.setAttribute("material",{src:`./assets/360_images/${selectedItemId}/${idh}.jpg`,color:"#fff"})  
    }
  },
  handleMouseEnterEvents: function() {
    // Eventos centrales del mouse.
    this.el.addEventListener("mouseenter", () => {
      const placeContainer = document.querySelector("#places-container");
      const { state } = placeContainer.getAttribute("tour");
      if (state === "places-list") {
        this.handlePlacesListState();
      }
    });
  },
  handlePlacesListState: function() {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id
      });
      this.el.setAttribute("material", {
        color:"#D76B30",
        opacity: 1
      });
    }
  },
  handleMouseLeaveEvents: function() {
    // Eventos 'mouseleave' del cursor.
    this.el.addEventListener("mouseleave", () => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("tour");
      if (state === "places-list") {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1
            });
          }
        }
      }
    });
  },
  
});
