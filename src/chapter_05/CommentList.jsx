import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "유승재",
        comment: "ㅋㅋㅋ",
    },
    {
        name: "강병준",
        comment: "ㅎㅇ",
    },
    {
        name: "이기훈",
        comment: "공부를 너무 안해",
    },
    {
        name: "이우신",
        comment: "개꿀~",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;
