import {
  GET_ALL_VENDORS,
  GET_ALL_VENDORS_SUCESS,
  GET_ALL_VENDORS_FAILED,
  GET_DETAIL_VENDOR_SUCESS,
  GET_DETAIL_VENDOR,
  GET_DETAIL_VENDOR_FAILED,
} from "../types";

const initialState = {
  loading: false,
  allVendors: {
    result:[
      {
        id: 8 ,
        title: "data is changed ",
        price: "1$-3000$",
        description:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        services: ["Wedding Bakary", "Wedding Cakes"],
        about:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        photos: [
          "https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg",
          "https://klike.net/uploads/posts/2019-05/medium/1559021804_2.jpg",
          "https://klike.net/uploads/posts/2019-06/1560838551_1.jpg",
          "https://mobimg.b-cdn.net/v3/fetch/28/2892a3887bd226b3cdd24742aa0a48b5.jpeg",
          "https://pix-feed.com/wp-content/uploads/2019/08/2-11.jpg",
        ],
      },
      {
        id: 9,
        title: "Wedding Cakes 2",
        price: "2$-3000$",
        description:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake. When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake. When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        services: ["Wedding Bakary", "Wedding Cakes"],
        about:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        photos: [
          "https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg",
          "https://storge.pic2.me/cm/2560x1920/147/54a996a7bb68e.jpg",
          "http://co15.nevseoboi.com.ua/animal/230/23044/1481357993-161004558-animal-nevseoboi.com.ua.jpg",
        ],
      },
      {
        id: 10,
        title: "Wedding Cakes 3",
        price: "3$-3000$",
        description:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        services: ["Wedding Bakary", "Wedding Cakes"],
        about:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        photos: [
          "https://funart.pro/uploads/posts/2021-03/1617048969_52-p-oboi-krasivie-peizazhi-prirodi-56.jpg",
          "https://images.prom.ua/1928657107_w640_h640_fotooboi-flizelinovye-3d.jpg",
          "https://klike.net/uploads/posts/2020-09/1600242017_1.jpg",
          "https://www.5.ua/media/pictures/1140x641/188383.jpg?t=1594112566",
        ],
      },
      {
        id: 11,
        title: "Wedding Cakes 4",
        price: "4$-3000$",
        description:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        services: ["Wedding Bakary", "Wedding Cakes"],
        about:
            "When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake.",
        files: [
          "https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg",
          "https://klike.net/uploads/posts/2019-05/medium/1559021804_2.jpg",
          "https://klike.net/uploads/posts/2019-06/1560838551_1.jpg",
          "https://mobimg.b-cdn.net/v3/fetch/28/2892a3887bd226b3cdd24742aa0a48b5.jpeg",
          "https://pix-feed.com/wp-content/uploads/2019/08/2-11.jpg",
        ],
      },
    ],
  },
  detailVendor: {
    finded: {
      companyTitle: "default title",
      companyDescription: "default desription",
      aboutCompany: "about company",
      priceRange: "default price range",
      fieldOfActivity: "default fiend",
      typeOfService: "default typeOfService",
      weddingActivity: "default weddingActivity",
      aboutTeam: "default about team",
      companyAvatar: "1.jpg",
    },
  },
  detailLoading: false,
  error: null,
};

export default function matchListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_VENDORS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_VENDORS_SUCESS:
      return {
        ...state,
        loading: false,
        allVendors: action.payload.data,
      };
    case GET_ALL_VENDORS_FAILED:
      return {
        ...state,
        loading: false,

        error: action.error,
      };
    case GET_DETAIL_VENDOR:
      return {
        detailLoading: true,
      };
    case GET_DETAIL_VENDOR_SUCESS: {
      return {
        ...state,
        detailVendor: action.payload.data,
        detailLoading: false,
      };
    }
    case GET_DETAIL_VENDOR_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        detailLoading: false,
      };
    }
    default:
      return state;
  }
}
