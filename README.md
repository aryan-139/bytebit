# ByteBit-Huffman Coding Compression System Documentation

This is a text analysis and compression system that leverages, among other things, the <strong> Lempel-Ziv-Welch (LZW) </strong> compression algorithm. 

It also draws insights from the uploaded text media and displays relevant KPI's like the compression ratio, token count, etcetera.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Gallery](#gallery)

## Introduction

The LZW (Lempel-Ziv-Welch) algorithm is a data compression algorithm that works by replacing repeated sequences of characters with shorter codes. It was published by Abraham Lempel, Jacob Ziv, and Terry Welch in 1984. The LZW algorithm is widely used in file compression formats such as GIF, TIFF, and UNIX compress.

## Features

- [x] Compresses text files
- [x] Decompresses text files
- [x] Displays relevant text insights
- [x] Download compressed files
- [x] Download decompressed files

## Installation

1. Clone the repository

```
https://github.com/aryan-139/bytebit.git
```
2. Install dependencies

```
cd client
npm install

cd server
npm install
```

3. Run the App

```
cd client 
npm run start 

cd server 
npm run start
```

## Gallery 

Landing Page
![image](https://github.com/aryan-139/bytebit/blob/main/media/main.png)

Home Page
![image](https://github.com/aryan-139/bytebit/blob/main/media/compress.png)

Media Added Indicator
![image](https://github.com/aryan-139/bytebit/blob/main/media/media-added.png)

Details Page with all the relevant KPI's
![image](https://github.com/aryan-139/bytebit/blob/main/media/details.png)

