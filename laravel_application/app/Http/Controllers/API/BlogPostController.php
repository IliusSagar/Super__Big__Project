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

    function add(Request $request){
        $blog = new BlogPost;
        $blog->title = $request->title;
        $blog->description = $request->description;
        $result = $blog->save();

        if ($result) {
            return ["Result"=>"Data has been saved!"];
        }else{
            return ["Result"=>"Operation failed!"];
        }

    } // End Method

}
