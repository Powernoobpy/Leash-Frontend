import React, { useState, useEffect, Component } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'

const Box = styled.div` 
    width: 600px;
    /* height: 300px; */
    margin: 20px;
    padding:10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  `
const PostImg = styled.img`
    width: 150px;
    height: 150px;
    padding: 5px;
  `
const PostText = styled.h1`
    font-size: 15px;
    padding: 5px;
`
const Time = styled.p`
    font-size: 10px;
    margin:5px;
`

const PictureLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Button = styled.button`
background-color: #008CBA;
  border: none;
  color: white;
  padding: 7px 12px;
  text-align: center;
  display: inline-block;
  font-size: 10px;
  cursor: pointer;
`

export const PopUp = (props) => {
    const [Imgs, setImgs] = useState([])
    const [Comments, setComments] = useState([])

    useEffect(() => {
        const data = {
            picture_link : props.post.picture_link
        }
        axios.post('https://leash-khakai-api.herokuapp.com/post/showPostImage', data)
        .then(res => {
            setImgs(res.data.src);
        })
    },[props.post.picture_link])

    useEffect(() => {
        const data = {
            id : props.post.post_id
        }
        axios.post('https://leash-khakai-api.herokuapp.com/post/showComment', data)
        .then(res => {
            setComments(res.data.src);
        })
    },[])

    return ( 
        <div>
        <Box>
                <p>{props.post._id}</p>
                <PictureLayout>
            {
                Imgs.map((img,i) => {
                    return(
                        <PostImg key={i} className="img" src={img}></PostImg>
                    )
                })
            }
            </PictureLayout>
                <PostText>{props.post.post_text}</PostText>
                <Time>date XX/XX/XX time XX:XX</Time>
                <ButtonLayout>
                    <Button>UPVOTE</Button>
                    <Button>DOWNVOTE</Button>
                </ButtonLayout>
                    {
                    Comments.map((comment,i) => {
                        return(
                            <div>555</div>
                        )
                    })
                    }   
        </Box>
        </div>
    )
}

export default PopUp