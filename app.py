
from flask import Flask,render_template,request,redirect,session,flash,url_for
from functools import wraps
from flask_mysqldb import MySQL
import mysql.connector
# import mysql.connector
import connect

conn = mysql.connector.connect(
   user='root', password='', host='127.0.0.1', database='BigData'
)
cursor = conn.cursor()

app=Flask(__name__)
 
#Login
@app.route('/') 
@app.route('/login',methods=['POST','GET'])
def login():
    status=True
    if request.method=='POST':
        username=request.form["username"]
        password=request.form["password"]
        # cur=mysql.connection.cursor()
        cursor.execute("select * from admin where username=%s and password=%s",(username,password))
        data=cursor.fetchone()
        if data:
            # session['logged_in']=True
            # session['username']=data["username"]
            flash('Login Successfully','success')
            return redirect('index')
        else:
            flash('Invalid Login. Try Again','danger')
    return render_template("login.html")

@app.route("/index")
def index():
    return render_template("contoh.html")

@app.route("/index2")
def dash():
    return render_template("index.html")

@app.route("//index2/ui/modals")
def dashd():
    return render_template("modals.html")

#logout
@app.route("/logout")
def logout():
	session.clear()
	flash('You are now logged out','success')
	return redirect(url_for('login'))
    
if __name__=='__main__':
    app.secret_key='secret123'
    app.run(host='127.0.0.1', port=8080)
    app.run(debug=True)