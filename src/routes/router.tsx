import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page1 from "../pages/Page1/Page1";
import Page2 from "../pages/Page2/Page2";
import FeedPage from "@/pages/Feed/FeedPage";
import MypageNavigation from "@/components/layout/navigation/MypageNavigation";
import MoodReport from "@/pages/Mypage/MoodReport";
import DiaryManagement from "@/pages/Mypage/DiaryManagement";
import PointManagement from "@/pages/Mypage/PointManagement";
import Theme from "@/pages/Mypage/Theme/Theme";
import Settings from "@/pages/Mypage/Settings";
import Emoji from "@/pages/Mypage/Theme/TabMenu/Emoji";
import Font from "@/pages/Mypage/Theme/TabMenu/Font";
import Own from "@/pages/Mypage/Theme/TabMenu/Own";
import BoardWrite from "@/pages/board/new/BoardWrite";
import BoardDetail from "@/pages/board/[boardId]/Detail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/feed",
        element: <FeedPage />,
      },
      {
        path: "/board/new",
        element: <BoardWrite isEdit={false} />,
      },
      {
        path: "/board/edit/:boardId",
        element: <BoardWrite isEdit={true} />,
      },
      {
        path: "/board/:boardId",
        element: <BoardDetail />,
      },
      {
        path: "/mypage",
        element: <MypageNavigation />, // MypageNavigation 컴포넌트 추가
        children: [
          { index: true, element: <MoodReport /> }, // 기본 라우트 설정
          {
            path: "mood-report",
            element: <MoodReport />, // 무드 리포트 페이지
          },
          {
            path: "diary-management",
            element: <DiaryManagement />, // 다이어리 관리 페이지
          },
          {
            path: "point-management",
            element: <PointManagement />, // 포인트 관리 페이지
          },
          {
            path: "theme",
            element: <Theme />, // 테마 페이지
            children: [
              { index: true, element: <Emoji /> }, // 기본 라우트 설정
              {
                path: "emoji",
                element: <Emoji />,
              },
              {
                path: "font",
                element: <Font />,
              },
              {
                path: "own",
                element: <Own />,
              },
            ],
          },
          {
            path: "settings",
            element: <Settings />, // 설정 페이지
          },
        ],
      },
    ],
  },
]);
