# react-componenator

It's really bad name. I'm sorry.

## What it does

Creates a templated folder & files for your React Components (although it can be used for anything)

## Install

<pre>$ npm i -g react-componenator</pre>

## How it works

In your root folder create a folder called `ComponentTemplate`.
All folders, files and text in files will be copied to your destination folder and whereever the `ComponentTemplate` string appears, including file and folder names, it will be replaced by your component name.

## Usage

The npm module has a shortcut `rc` command.
From the root of your repo

<pre>$ rc</pre>
<pre>prompt: Path: [destination folder eg 'src/components']</pre>
<pre>prompt: Name: (Component) [Component name eg 'Button']</pre>

You can edit the files and folders as much as you like eg add test files, TypeScript etc.
