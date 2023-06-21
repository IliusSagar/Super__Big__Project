<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogPost;

class BlogPostController extends Controller
{
    function list(){
        return BlogPost::all();
    } // End Method

    function listEdit($id){
        return BlogPost::find($id);
    } // End Method

}
