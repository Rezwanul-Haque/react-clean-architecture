import React from "react";
import ReactDOM from "react-dom";
import App from "./presenter/App";
// import ArticleDriverImpl from "./services/articleDriver";
// import ArticleRepositoryImpl from "./repository/articleRepository";
// import ArticleUseCaseImpl from "./useCase/articleUseCase";

// const repository = new ArticleRepositoryImpl(new ArticleDriverImpl());
// const useCase = new ArticleUseCaseImpl(repository);
ReactDOM.render(<App />, document.getElementById("app"));
