<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Students;
use Illuminate\Http\Response;

class StudentsController extends Controller
{
    public function index()
    {
        $students = Students::all();

        return response()->json([
            'students' => $students
        ]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param UpdateStudentRequest $request
     * @param  int $id
     * @return Response
     * UpdateStudentRequest $request, $id
     */
    public function show($id)
    {
        $student = Students::findOrFail($id);
        return $student;
    }

    public function destroy($id)
    {
        //$student = Students::findOrFail($id);
        
        // $this->studentService->deleteCurrentAvatar($student);

        Students::destroy($id);
    }
}