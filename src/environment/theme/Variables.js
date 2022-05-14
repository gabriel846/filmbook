// Theme
import COLORS from "./Colors";

export const ADD_COMMENT_BUTTON_STYLE = {
  backgroundColor: COLORS.SECONDARY,
  color: COLORS.PRIMARY,
  fontSize: "large",
  fontWeight: "bold",
  padding: "0.25em 0",
};

export const ADD_COMMENT_INPUT_STYLE = {
  backgroundColor: COLORS.PRIMARY,
  border: `0.25em solid ${COLORS.SECONDARY}`,
  color: COLORS.SECONDARY,
  fontSize: "medium",
  outline: "none",
};

export const APP_NAME = "DodagencyBroadcast";

export const AUTHENTICATION_BUTTON_STYLE = {
  backgroundColor: COLORS.SECONDARY,
  color: COLORS.PRIMARY,
  fontSize: "large",
  fontWeight: "bold",
  padding: "1em 0",
};

export const AUTHENTICATION_INPUT_STYLE = {
  backgroundColor: COLORS.PRIMARY,
  border: `0.25em solid ${COLORS.SECONDARY}`,
  color: COLORS.SECONDARY,
  fontSize: "medium",
  fontWeight: "bold",
  outline: "none",
};

export const AUTHENTICATION_TYPES_LIST = [
  `LOGIN`,
  `REGISTER`,
  `FORGOT_PASSWORD`,
];

export const CANCEL_FETCHING_NUMBER_OF_MOVIES_MESSAGE =
  "Cancelled fetching number of movies";

export const FETCHING_ERROR_MESSAGE =
  "Something went wrong... Please try again!";

export const FETCHING_MOVIE_DETAILS_MESSAGE = "Fetching movie details...";

export const LOADING_CONTAINER_STYLE = {
  alignItems: "center",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  userSelect: "none",
};

export const LOADING_MESSAGE = "Loading...";

export const LOADING_MESSAGE_STYLE = { color: COLORS.SECONDARY };

export const MOVIES_LIST_URL_WITH_MOVIE_ID =
  "https://yts.mx/api/v2/movie_details.json?movie_id=";

export const MOVIES_LIST_URL_WITH_PAGE =
  "https://yts.mx/api/v2/list_movies.json?page=";

export const NO_DATA_CONTAINER_STYLE = {
  alignItems: "center",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  userSelect: "none",
};

export const NEXT_BUTTON_STYLE = {
  backgroundColor: COLORS.TERTIARY,
  borderRadius: "0.5em",
  color: COLORS.PRIMARY,
  fontWeight: "bold",
  padding: "1em 2em",
};

export const NO_DATA_MESSAGE = "No data found...";

export const NO_DATA_MESSAGE_STYLE = { color: COLORS.SECONDARY };

export const PREVIOUS_BUTTON_STYLE = {
  backgroundColor: COLORS.TERTIARY,
  borderRadius: "0.5em",
  color: COLORS.PRIMARY,
  fontWeight: "bold",
  padding: "1em 2em",
};

export const USER_AVATAR_MOVIE_COMMENTS_STYLE = {
  backgroundColor: COLORS.SECONDARY,
  color: COLORS.PRIMARY,
};

export const USER_AVATAR_TOPBAR_STYLE = {
  backgroundColor: COLORS.PRIMARY,
  color: COLORS.SECONDARY,
};
