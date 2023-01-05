import { MessagePayloadType } from "@features/Messages/type"

const Message:MessagePayloadType[] = [{
    id:"1",
    text:"Sir, how may I help you?",
    type:"SELLER",
},
{
    id:"2",
    text:"I’m looking for a pair of leather shoes.",
    type:"SHOPPER",
},
{
    id:"3",
    text:"What size do you wear?",
    type:"SELLER",
},
{
    id:"4",
    text:"Seven",
    type:"SHOPPER",
},
{
    id:"5",
    text:"Seven for which brand?",
    type:"SELLER",
},
{
    id:"6",
    text:"Does the same size mean different thing for different brands? It should be standard across all brands, right?",
    type:"SHOPPER",
},
{
    id:"7",
    text:"For few brands, the same size can mean slightly different fitting.",
    type:"SELLER",
},
{
    id:"8",
    text:"Is it? I thought otherwise. Anyway, I wear size seven of Hush Puppies, and because I want to buy the same brand it shouldn’t be a problem.",
    type:"SHOPPER",
},
{
    id:"9",
    text:"Yes, it won’t be a problem in your case. This section has new arrivals and this has shoes on sale.",
    type:"SELLER",
},

]

export default Message