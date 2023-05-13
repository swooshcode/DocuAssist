import { Chroma } from 'chroma-js';

const chroma = new Chroma('localhost');

export async function storeMessageResponse(response) {
  // Your logic for storing the response in your Chroma database goes here
}

export async function getMessageResponse() {
  // Your logic for retrieving the latest message response from your Chroma database goes here
}
