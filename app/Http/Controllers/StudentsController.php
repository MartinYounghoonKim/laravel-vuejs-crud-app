<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Students;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class StudentsController extends Controller
{
	public function index()
	{
    $students = Students::all();
    
    error_log( "/tmp/logfile.log\"");

		/*
		* 하단의 문법으로 해당하는 Id에 해당 하는 쿼리문을 직접 날릴 수도 있음
		* $students = DB::select('select * from students where id = ?', [100]);
		*/

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

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$name = $request->input('name');
		$birthday = $request->input('birthday');
		$email = $request->input('email');

		//DB::insert('insert into students (name, birth_date, email) values (?, ?, ?)', [$name, $birthday, $email]);
		DB::table('students')->insertGetId(
			[
				'name' => $name,
        'birth_date' => $birthday,
        'email' => $email
			]
    );

		return response(null, Response::HTTP_CREATED);
	}

	public function destroy($id)
	{
		//$student = Students::findOrFail($id);
		
		// $this->studentService->deleteCurrentAvatar($student);

		Students::destroy($id);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
    $name = $request->input('name');
		$birthday = $request->input('birthday');
    $email = $request->input('email');
    
    DB::table('students')
    ->where('id',$id)
    ->update([
      'name' => $name,
      'birth_date' => $birthday,
      'email' => $email
    ]);

    return response(null, Response::HTTP_CREATED);
	}
}