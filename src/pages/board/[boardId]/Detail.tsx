import styled from "styled-components"
import UploadImg from "../../../assets/images/upload.svg"
import BookMarkImg from "../../../assets/images/bookmark.svg"
import EmotionImg from "../../../assets/images/피곤.svg"
import HeartImg from "../../../assets/images/heart.svg"
import PencilImg from "../../../assets/images/pencil.svg"
import TrashImg from "../../../assets/images/trash.svg"
import CommentImg from "../../../assets/images/comment.svg"
import CommentCheckImg from "../../../assets/images/commentCheck.svg"
import ArrowImg from "../../../assets/images/commentArrow.svg"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Wrap = styled.div`
    width:994px;
    margin:0 auto;
    padding-bottom:176px;
`

const Title = styled.div`
    > p{
        font-size:36px;
        font-weight:var(--font-semibold);
    }
    > h2{
        font-weight:var(--font-medium);
    }
`

const Span = styled.span`
`;

const UserName = styled.span`
    font-weight: 500;
`;

const Div = styled.div`
    position: relative;
    line-height: 24px;
`;

const MoodIcon = styled.img`
    width: 24px;
    position: relative;
    height: 24px;
    object-fit: cover;
`;

const MoodWrap = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`;

const FrameContainer = styled.div`
    border-radius: 10px;
    background-color: #f5f1e7;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    box-sizing: border-box;
    color:var(--main-text);
`;

const Div1 = styled.div`
    width: 75px;
    position: relative;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const FrameGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`;

const FrameWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const BookmarkIcon = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor:pointer;
`;

const UploadIcon = styled.img`
    position: absolute;
    top: 0px;
    left: 54px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    cursor:pointer;
`;

const IconWrap = styled.div`
    width: 78px;
    position: relative;
    height: 24px;
`;

const FrameParentRoot = styled.div`
    width: 100%;
    position: relative;
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: 20px;
    color: #f3752e;
    margin-top:30px;
`;

// 이미지
const MainImage = styled.img`
    width: 686px;
    position: relative;
    border-radius: 8px;
    height: 446px;
    object-fit: cover;
`;
const SubImage = styled.img`
    align-self: stretch;
    position: relative;
    border-radius: 8px;
    max-width: 100%;
    overflow: hidden;
    height: 188px;
    flex-shrink: 0;
    object-fit: cover;
    background-color:#333;
`;
const SubImageOpacity = styled.img`
    align-self: stretch;
    position: relative;
    border-radius: 8px;
    max-width: 100%;
    overflow: hidden;
    height: 188px;
    flex-shrink: 0;
    object-fit: cover;
    opacity: 0.5;
    background-color:#333;
`;
const SubImageWrap = styled.div`
    width: 276px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
`;
const ImageWrap = styled.div`
    width: 100%;
    position: relative;
    height: 446px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
    margin-top:60px;
`;

const Text = styled.div`
    margin-top:60px;
    width:994px;
    font-size:18px;
    line-height:40px;
`
const LikeWrap = styled.div`
    margin-top:60px;
    width:100%;
    height:24px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    flex-direction:row;
    gap:10px;

    > img{
        cursor:pointer;
    }
    > span{
        position:relative;
        line-height:24px;
        font-size:20px;
    }
`

const Button = styled.div`
    width:264px;
    height:52px;
    margin:0 auto;
    display:flex;
    gap:32px;
    margin-top:60px;

    > button{
        width:112px;
        height:52px;
        border-radius:10px;
        color:#fff;
        font-size:18px;
    }
    > button:first-child{
        background-color:var(--line-basic);
    }
    > button:last-child{
        background-color:var(--orange-button);
    }
`

const ProfileWrap = styled.div`
    margin-top:108px;
    width:100%;
    height:56px;
    display:flex;
    align-items:center;
    gap:20px;
`

const Profile = styled.div`

    > p{
        margin:0;
        font-size:24px;
    }
    > span{
        font-size:18px;
        color:var(--search-placeholder);
        font-weight:var(--font-regular);
    }
`

const ProfileImage = styled.div`
    width:80px;
    height:80px;
    border-radius:100px;
    background-color:var(--line-basic);
`

const Line = styled.div`
    width:100%;
    border-top:1px solid var(--line-basic);
    margin-top:110px;
    margin-bottom:82px;
`

const CommentCount = styled.div`
    margin-bottom:14px;
    font-size:18px;
`

const TextArea = styled.textarea`
    width:100%;
    height:120px;
    border-radius:10px;
    padding:20px;
    border:1px solid var(--search-placeholder);
    resize:none;

    &::placeholder{
        color:var(--text-03);
    }
`

const CommentButton = styled.div`
    width:100%;
    height:52px;
    display:flex;
    flex-direction:row-reverse;
    margin-top:24px;

    > button{
        width:112px;
        height:52px;
        border-radius:10px;
        color:#fff;
        font-size:18px;
        background-color:var(--comment-button);
    }
`

const CommentList = styled.div`
    margin-top:158px;

    ${ProfileWrap}{
        display:block;

        ${ProfileImage}{
            width:54px;
            height:54px;
            background-color:#f28a8a;
            position:absolute;
            top:0;
            left:0;
        }
        ${Profile}{
            position:absolute;
            top:0;
            left:70px;
            > p{
                font-size:18px;
            }
            > span{
                font-size:14px;
                color:var(--text-03);
            }
        }
    } 
`

const ListArray = styled.div`
    height:54px;
    position:relative;
    display:flex;
`

const IconButton = styled.div`
    display:flex;
    gap:14px;
    width:50px;
    height:18px;
    cursor:pointer;
`

const CommentText = styled.div`
    display:flex;
    /* align-items:center; */
    height:38px;
    margin-top:18px;
    margin-bottom:22px;
`

const CommentWriteButton = styled.div`
    display:flex;
    align-items:center;
    gap:8px;
    height:24px;
    margin-bottom:20px;

    > button{
        height:18px;
        font-size:16px;
        color:var(--comment-button);
    }
`

const CommentWrite = styled.div`
    width:954px;
    background-color:var(--bg-02);
    padding:30px 30px 20px 30px;
    float:right;
    /* margin:0 auto; */

    ${TextArea}{
        width:822px;
        height:100px;
        resize:none;
    }

    ${Button}{
        width:100%;
        gap:0;
        display:flex;
        justify-content:flex-end;
        padding-right:32px;

        > button{
            font-size:16px;
        }
        > button:first-child{
            background-color:transparent;
            color:var(--comment-button);
        }
        > button:last-child{
            background-color:var(--comment-button);
            width:94px;
        }
    }
`

const TextAreaWrap = styled.div`
    position:relative;
    display:flex;
    justify-content:center;

    > img{
        position:absolute;
        top:0.62%;
        right:97.87%;
        left:0%;
        bottom:87.04%;
    }
`

interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    visibility: string;
    // 필요한 다른 속성들 추가
  }

export default function BoardDetail(){

    const {boardId} = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get<Post>(`https://api.meet-da.site/board/${boardId}`);
                
                if (response.data) {
                  setPost(response.data);
                } else {
                  console.error("데이터가 없습니다");
                }
                setLoading(false);
              } catch (error) {
                if (axios.isAxiosError(error)) {
                  if (error.response?.status === 404) {
                    console.error("게시글을 찾을 수 없습니다");
                  } else {
                    console.error("서버 에러:", error.response?.data);
                  }
                } else {
                  console.error("게시글 가져오기 실패:", error);
                }
                setLoading(false);
              }
            };
        fetchPost();
    }, [boardId]);

    const handleDelete = async () => {
        if (window.confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
            try {
                const response = await axios.delete(`https://api.meet-da.site/board/${boardId}`);
                if (response.status === 200) {
                    console.log("게시글 삭제 성공");
                    navigate("/"); // 삭제 후 홈 페이지로 리다이렉트
                } else {
                    console.error("게시글 삭제 실패", response.data);
                }
            } catch (error) {
                console.error("게시글 삭제 중 오류 발생", error);
                alert("게시글 삭제 중 오류가 발생했습니다.");
            }
        }
    };

    if (loading) {
        return <p>로딩 중...</p>; // 로딩 중일 때 표시할 내용
    }

    if(!post){
        return <p>게시글을 찾을 수 없습니다.</p>
    }

    const handleEdit = () => {
        navigate(`/board/edit/${boardId}`);
    }

    return(
        <Wrap>
            <Title>
                {/* <h2>2024년 12월 12일</h2> */}
                {/* <p>Q. 올해 가장 감사했던 순간은 언제인가요?</p> */}
                <h2>{post.createdAt.substring(0, 10)}</h2>
                <p>{post.title}</p>
            </Title>
            <FrameParentRoot>
                <FrameWrapper>
                    <FrameGroup>
                        <FrameContainer>
                            <MoodWrap>
                                <Div>
                                    <Span>{`오늘 `}</Span>
                                    <UserName>{post.author}</UserName>
                                    <Span>님의 기분은...</Span>
                                </Div>
                                <MoodIcon alt="피곤" src={EmotionImg} />
                            </MoodWrap>
                        </FrameContainer>
                        <Div>·</Div>
                        <Div>{post.createdAt.substring(0, 10)}</Div>
                        <Div>·</Div>
                        <Div1>{post.visibility}</Div1>
                    </FrameGroup>
                </FrameWrapper>
                <IconWrap>
                    <BookmarkIcon alt="북마크 이미지" src={BookMarkImg} />
                    <UploadIcon alt="업로드 이미지" src={UploadImg} />
                </IconWrap>
            </FrameParentRoot>
            <ImageWrap>
                <MainImage alt="" src="Rectangle 3028.png" />
                <SubImageWrap>
                    <SubImage alt="" src="Rectangle 3029.png" />
                    <SubImageOpacity alt="" src="Rectangle 3030.png" />
                    <SubImageOpacity alt="" src="Rectangle 3031.png" />
                </SubImageWrap>
            </ImageWrap>
            <Text>{post.content}</Text>
            <LikeWrap>
                <img src={HeartImg} alt="하트 이미지" />
                <span>21</span>
            </LikeWrap>
            <Button>
                <button onClick={handleDelete}>삭제하기</button>  
                <button onClick={handleEdit}>수정하기</button>
            </Button>
                <ProfileWrap>
                    <ProfileImage></ProfileImage>
                    <Profile>
                        <p>{post.author}</p>
                        <span>도토리가 좋아요</span>
                    </Profile>
                </ProfileWrap>
            <Line></Line>
            <CommentCount>2개의 댓글</CommentCount>
            <TextArea placeholder="댓글을 작성하세요." />
            <CommentButton>
                <button>댓글 작성</button>
            </CommentButton>
            <CommentList>
                <ListArray>
                    <ProfileWrap>
                        <ProfileImage></ProfileImage>
                        <Profile>
                            <p>믿음소망사과</p>
                            <span>방금 전</span>
                        </Profile>
                    </ProfileWrap>
                    <IconButton>
                        <img src={PencilImg} alt="수정하기 이미지" />
                        <img src={TrashImg} alt="삭제하기 이미지" />
                    </IconButton>
                </ListArray>
                <CommentText>
                    <p>댓글을 작성해봅시다.</p>
                </CommentText>
                <CommentWriteButton>
                    <img src={CommentCheckImg} alt="댓글 이미지" />
                    <button>답글달기</button>
                </CommentWriteButton>
                <CommentWrite>
                    <TextAreaWrap>
                        <img src={ArrowImg} alt="답글 화살표" />
                        <TextArea placeholder="댓글을 작성하세요." />
                    </TextAreaWrap>
                    <Button>
                        <button>취소</button>
                        <button>댓글 작성</button>
                    </Button>
                </CommentWrite>
            </CommentList>
        </Wrap>
    )
}