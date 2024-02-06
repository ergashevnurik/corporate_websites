from flask import render_template

from app import app
from config import *

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', urls=urls, short_details=short_details, metas=meta)


@app.route('/product/<product_url>')
def product(product_url):
    print(product_url)
    if product_url in urls:
        return render_template('product.html', title=urls[product_url], description=description[product_url])
    else:
        return render_template('index.html', urls=urls)
