const config = require('../config')
const fs = require('fs-extra')
const path = require('path')
const request = require('superagent')
const cheerio = require('cheerio')
const htmlPath = path.resolve(__dirname, '../src/pages')
const uatPrefix = 'http://lf.atguat.com.cn'
const productionPrefix = 'http://lf.gome.com.cn'

module.exports = async (req, res, next) => {
    const file = htmlPath + req.originalUrl
	try {
        const exists = await fs.pathExists(file)
        if(exists){
            const jsName = req.originalUrl.replace('html', 'js')
        	let content = await fs.readFile(file, 'utf-8')
        	const match = content.match(/<!--#\s*include\s+virtual=(["']).+?\1\s*-->/g);
        	const fileUrls = match.map( m => m.match(/<!--#\s*include\s+virtual=(["'])(.+?)\1\s*-->/)[2])
            let promises = fileUrls.map( fileUrl => request.get(`${config.dev.ssi === 'uat' ? uatPrefix : productionPrefix}${fileUrl}`))
        	let results = await Promise.all(promises)
        	match.forEach( (m, i) => content = content.replace(m, results[i].res.text))
            $ = cheerio.load(content)
            $('body').append(`<script type="text/javascript" src="${jsName}"></script>`)
        	res.send($.html())
        } else {
        	next()
        }
    } catch (err) {
        console.error(err)
        next()
    }
}