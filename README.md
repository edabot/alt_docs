To run this locally you will need to have Gatsby installed on your machine
`npm i -g gatsby-cli`

Install all the bits and bobs
`npm i`

Run the site locally
`gatsby develop`

Deploy the site to GH Pages
`npm run deploy`

To migrate RST files, place the folder in a new `content` folder and run this script in the terminal
`for i in content/**/*.rst ; do python3 scripts/pre_pandoc_script.py ${i%}; echo "$i" && pandoc --wrap=none $i -f rst -t gfm -o ${i%.*}.mdx ; done ; python3 scripts/post_pandoc_script.py`

The results will show up in the `content_build` folder. These can then be moved to the `docs` folder.

The folder structure in docs is `{product}/{version number}/{content folder}`. If there is no version involved, just make it "1"
# alt_docs
