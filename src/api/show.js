import axios from "axios";

export default axios.create({
    baseURL:"http://22ca008fd79a.ngrok.io",
    headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydHVyX2FsbWV5ZGFAb3V0bG9vay5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNTk2NDE5MjIxLCJleHAiOjE1OTY0MzcyMjF9.DGBsgLWpprqzS1QzL2iyZ_9CsGsfVsg-SxPSK0e_IKY"
    }
});