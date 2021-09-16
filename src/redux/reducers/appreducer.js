import {
  ADD_A_NEW_CAT,
  EDIT_A_NEW_CAT,
  DELETE_A_NEW_CAT,
} from '../actions/actionTypes';

const initialState = {
  catList: [
    {
      name: 'Oliver',
      breed: 'Abyssinian',
      description:
        'The Abyssinian cat as it is known today was bred in Great Britain. It is alleged that British soldiers deployed to North Africa in the nineteenth century returned home with kittens purchased from local traders.',
      color: 'Black',
    },
    {
      name: 'Leo',
      breed: 'Abyssinian',
      description:
        "Aegean has only very recently begun to be bred systematically, it has been domesticated for many centuries and thus has become adapted very well to humans. It is a social pet that tolerates living in an apartment rather well. It is intelligent, active, lively and also communicative, not hesitating to draw a person's attention.",
      color: 'Red',
    },
    {
      name: 'Milo',
      breed: 'Asian',
      description:
        'It has a broad, rounded chest and slender legs with a tail of medium length. The pleasantly rounded head has no flattened areas, and there is a very visible spot in its profile. This gives the Asian a full-looking face.',
      color: 'Green',
    },
    {
      name: 'Charlie',
      breed: 'Bengal',
      description:
        'Jean Mill of California is given credit for the modern Bengal breed. She had a degree in psychology from Pomona College and had taken several graduate classes in genetics at University of California, Davis.',
      color: 'Blue',
    },
    {
      name: 'Simba',
      breed: 'Chausie',
      description:
        'Chausies are bred to be medium to large in size, as compared to traditional domestic breeds. Most Chausies are a little smaller than a male Maine Coon, for example, but larger than a Siamese. Adult Chausie males typically weigh 11 to 16 pounds.',
      color: 'Violet',
    },
    {
      name: 'Max',
      breed: 'Khao Manee',
      description:
        'The Khao Manee is an ancient cat breed comparable to the Siamese, Korat and other Thailand cat breeds. The Khao Manee is mentioned in the Tamra Maew, or Cat Book Poems, that also mention the Siamese cat breed and other coat colored cats endemic to the country Thailand, or Siam, as it was previously known.',
      color: 'Orange',
    },
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_A_NEW_CAT: {
      const newCatList = [...state.catList, payload];
      return {catList: newCatList};
    }
    case EDIT_A_NEW_CAT: {
      const editedCat = {};
      editedCat.name = payload.name;
      editedCat.breed = payload.breed;
      editedCat.description = payload.description;
      editedCat.color = payload.color;
      const newCatList = [...state.catList];
      newCatList[payload.index] = editedCat;
      return {catList: newCatList};
    }
    case DELETE_A_NEW_CAT: {
      const newCatList = [...state.catList];
      newCatList.splice(payload, 1);
      return {catList: newCatList};
    }
    default:
      return state;
  }
};
