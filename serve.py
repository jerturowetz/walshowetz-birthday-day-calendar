#!/usr/bin/env python3
"""
Simple HTTP server for local development
Run with: python3 serve.py
"""

import http.server
import socketserver
import os
import sys

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.realpath(__file__)), **kwargs)

if __name__ == "__main__":
    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🎂 Walshowetz Birthday Time Visualizer")
        print(f"📡 Serving at http://localhost:{PORT}")
        print(f"📁 Directory: {os.getcwd()}")
        print(f"🛑 Press Ctrl+C to stop")
        print()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")
            sys.exit(0)