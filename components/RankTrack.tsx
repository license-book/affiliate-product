"use client";
import {useEffect} from "react";
import {trackRankEvent,type RankEventType} from "../lib/ranking";
export default function RankTrack({productId,category,type="view"}:{productId:string;category:string;type?:RankEventType}){useEffect(()=>{trackRankEvent(productId,category,type)},[productId,category,type]);return null}
