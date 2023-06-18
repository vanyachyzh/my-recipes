import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { normalizedRecipe } from '../types/NormalizedRecipe';
import { Category } from '../types/Category';
import { CookingTime } from '../types/CookingTime';
import { fetchRecipes } from '../api';
import { NormalizerOptions } from '@testing-library/react';
import { Recipe } from '../types/Recipe';
import { listRecipes } from '../tempData';
import { normalizeRecipes } from '../utils/normalizeRecipes';

export const getRecipes = createAsyncThunk(
  'recipes/fetch',
  () => fetchRecipes(),
);

type RecipesState = {
  query: string;
  category: Category;
  cookingTime: CookingTime;
  recipes: normalizedRecipe[];
  isLoading: boolean,
  hasError: boolean,
  currentRecipe: normalizedRecipe | null
};

const initialState: RecipesState = {
  query: "",
  category: Category.None,
  cookingTime: CookingTime.None,
  recipes: [],
  isLoading: false,
  hasError: false,
  currentRecipe: normalizeRecipes(listRecipes)[0]
};

const commentSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
    updateRecipes: (state, action: PayloadAction<normalizedRecipe[]>) => {
      state.recipes = action.payload;
    },
  },
  extraReducers: builder => builder
    .addCase(getRecipes.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })

    .addCase(
      getRecipes.fulfilled,
      (state, action: PayloadAction<Recipe[]>) => {
        state.recipes = normalizeRecipes(action.payload);
        state.isLoading = false;
      },
    )

    .addCase(getRecipes.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    }),
});

export const { updateQuery, updateCategory, updateRecipes } = commentSlice.actions;

export default commentSlice.reducer;