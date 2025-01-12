import ReactQuill from "react-quill"
import 'quill/dist/quill.snow.css';
import styled from "styled-components"
import { useEffect, useRef, useState } from "react";
import dropdownImg from "../../../assets/images/dropdown.svg"

export default function BoardWrite(){

    const Wrap = styled.div`
        width:62.125rem;
        margin:0 auto;

        > h2 {
            height:1.5rem;
            margin-bottom:0.75rem;
            font-size:1.5rem;
            font-weight:400;
        }

        @media (max-width:781px){
            width:40rem;
            margin:0 auto;
        }
        @media (max-width:390px){
            h2{
                font-size:1rem;
                margin:0;
            }
            width:20rem;
        }
    `

    const TitleWrap = styled.div`
        height:3.25rem;
        display:flex;
        justify-content:space-between;
        align-items:center;

        > p{
            font-size:1.875rem;
            font-weight:600; 
        }

        @media (max-width:781px){
            p{font-size:1.75rem;}
        }
        @media (max-width:390px){
            flex-direction:column;
            height:auto;
            p{
                margin:0.375rem 0 0.75rem;
                width:20rem;
                font-size:1.125rem;
            }
            >div{
                width:100%;
                display:flex;
                justify-content:flex-end;
            }
        }
    `

    const DropdownContainer = styled.div`
        width:8.75rem;
        height:3.25rem;
        border:0.0625rem solid var(--main-text);
        border-radius:0.625rem;
        position:relative;
        background-color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;

        @media (max-width:781px){
            font-size:1.125rem; 
        }
        @media (max-width:390px){
            width:7.75rem;
            height:2.75rem;
            font-size:1rem;
        }
    `

    const DropdownMenu = styled.ul`
        width:8.75rem;
        height:12.25rem;
        box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
        position:absolute;
        margin:0;
        margin-top:0.5rem;
        padding:0.5rem 0;
        z-index:10;
        background-color:#fff;
        border-radius:0.625rem;
        

        > li:nth-child(2){
            margin:0.75rem auto;
        }
        @media (max-width:390px){
            width:7.75rem;
            top:18.4375rem;
        }
    `

    const DropdownItem = styled.li`
        width:7.75rem;
        height:3.25rem;
        font-size:1.125rem;
        list-style:none;
        cursor:pointer;
        padding:0.625rem;
        margin:0 auto;
        display:flex;
        align-items:center;
        justify-content:center;

        // 선택된 항목 스타일
        background-color: ${({ isSelected }) => (isSelected ? 'var(--bg-02)' : '#fff')};

        &:hover {
            background-color: var(--bg-02);
        }
        @media (max-width:390px){
            font-size:1rem;
        }
    `

    const SelectMenu = styled.div`
        width:4.375rem;
        height:3.25rem;
        line-height:3.3125rem;
    `

    const EditorWrap = styled.div`
        width:62.125rem;
        margin:0 auto;
        position:relative;

        > p{
            position:absolute;
            bottom:0.3125rem;
            right:2.5rem; 
        }
        @media (max-width:781px){
            width:40rem
        }
        @media (max-width:390px){
            width:20rem;   
        }
    `

    const StyledQuillEditor = styled(ReactQuill)`
        .ql-container{
            border-bottom-left-radius:1.25rem;
            border-bottom-right-radius:1.25rem;
            overflow-y:auto;
        }
        .ql-editor{
            min-height:12.5rem;
            white-space:pre-wrap;
            word-break:break-word;
        }
        .ql-toolbar{
            border-top-left-radius:1.25rem;
            border-top-right-radius:1.25rem;
        }
        margin:2.25rem 0;
        font-size:1.125rem;

        @media (max-width:390px){
            margin:1.3125rem 0 1.625rem;
        }
    `

    const WriteEmotion = styled.div`
        height:5.75rem;
        background-color:#F5F1E7;
        border-radius:1.25rem;

        > p {
            line-height:5.75rem; 
            padding:0 2.5rem;
            font-size:1.25rem;
        }
        @media (max-width:390px){
            height:4.5rem;
            p{
                line-height:4.5rem;
                font-size:1.125rem;
                margin:0;
            }
        }
    `

    const ButtonWrap = styled.div`
        display:flex;
        width:18rem;
        height:3.5rem;
        margin:0 auto;

        > button{
            width:8rem;
            height:3.5rem;
            text-align:center;
            color:#fff;
            margin:0 1rem;
            margin-top:2.875rem;
            border-radius:1.25rem;
            font-size:1.25rem; 
        }

        > button:first-child{
            background-color:var(--line-basic); 
        }
        > button:last-child{
            background-color:var(--submit-button); 
        }
        @media (max-width:390px){
            button{margin-top:2.25rem;}
        }
    `

    // HTML 태그 제거 함수
    const stripHtmlTags = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html; // HTML을 DOM 요소로 변환
        return div.textContent || div.innerText || ''; // 텍스트만 반환
    };    

    // 웹에디터 이미지 관련
    const [content, setContent] = useState('');
    const quillRef = useRef<ReactQuill | null>(null);
    
    // 글자 수
    const [text, setText] = useState(0);
    const maxLength = 1000;

    const handleChange = (value: string) => {
        const textContent = stripHtmlTags(value); // HTML 태그 제거 후 순수 텍스트 추출
        if (textContent.length <= maxLength) { // 제한된 글자 수 이하만 허용
            setContent(value); // 에디터 내용 설정
            setText(textContent.length); // 글자 수 업데이트
        }
    };


    // 이미지 업로드 핸들러
    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
        const file = input.files?.[0]; // ?
        if (file) {
            // 파일 크기 제한 (예: 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('이미지 크기는 5MB를 초과할 수 없습니다.');
                return;
            }

            // FileReader로 이미지 읽기
            const reader = new FileReader();
            reader.onload = (e) => {
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection(true);
                quill.insertEmbed(range.index, 'image', e.target?.result); // ?
                quill.setSelection(range.index + 1);
            };
            reader.readAsDataURL(file);
        }};
    };

    // 커스텀 툴바 모듈
    const modules = {
        toolbar: {
        container: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['image'], // 이미지 버튼
            ['code'] // 코드 버튼
        ],
        // 이미지 핸들러 커스터마이징
        handlers: {
            image: handleImageUpload
        }}
    };

    // 허용되는 포맷 지정
    const formats = [
        'header', 'bold', 'italic', 'underline','image', 'code',
        // 'list', 'bullet', // 'link', 
    ];

    useEffect(() => {
        const quill = quillRef.current.getEditor();
        const length = quill.getLength();
        quill.setSelection(length, 0); // 커서 위치 유지
        quill.focus(); // 포커스 유지
    }, [content]); // content가 변경될 때마다 실행

    // 드롭다운
    // 상태 관리
    const [isOpen, setIsOpen] = useState(false); // 메뉴 열림 여부
    const [selected, setSelected] = useState('전체 공개'); // 선택된 메뉴
    const menuRef = useRef(null);

    // 메뉴 토글 함수
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // 메뉴 아이템 클릭 함수
    const handleSelect = (item) => {
        setSelected(item); // 선택된 메뉴 업데이트
        setIsOpen(false); // 메뉴 닫기
    };

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false); // 외부 클릭 시 메뉴 닫기
        }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 드롭다운 아이템 목록
    const items = ['전체 공개', '서로 믿음 공개', '비공개'];

    

    return(
        <Wrap>
            <h2>2024년 12월 12일</h2>
            <TitleWrap>
                <p>Q. 올해 가장 감사했던 순간은 언제인가요?</p>
                <div ref={menuRef}>
                    <DropdownContainer onClick={toggleDropdown}>
                        <SelectMenu>{selected}</SelectMenu>
                        <img src={dropdownImg} alt="드롭다운 이미지" />
                    </DropdownContainer>

                    {/* 드롭다운 메뉴 */}
                    {isOpen && (
                        <DropdownMenu>
                        {items.map((item) => (
                            <DropdownItem 
                                key={item} 
                                onClick={() => handleSelect(item)}
                                isSelected={selected === item}
                            >
                            {item}
                            </DropdownItem>
                        ))}
                        </DropdownMenu>
                    )}
                </div>
            </TitleWrap>
            <EditorWrap>
                <StyledQuillEditor 
                    ref={quillRef}
                    value={content}
                    onChange={handleChange}
                    modules={modules}
                    formats={formats}
                />
                <p>{text}/{maxLength}</p>
            </EditorWrap>
            <WriteEmotion>
                <p>오늘 다람지님의 기분은...</p>
            </WriteEmotion>
            <ButtonWrap>
                <button>취소</button>
                <button>등록</button>
            </ButtonWrap>
        </Wrap>
    )
}
