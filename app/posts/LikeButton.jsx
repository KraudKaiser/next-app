"use client"
import { useState } from "react"

export function LikeButton(){
	const [liked, setLiked] = useState(false)
	return(
		<button onClick={() => setLiked(!liked)}>
			{liked ? "No me gusta" : "Me gusta"}
		</button>
	)
}