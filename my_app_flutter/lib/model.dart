// To parse this JSON data, do
//
//     final samplePosts = samplePostsFromJson(jsonString);

import 'dart:convert';

List<SamplePosts> samplePostsFromJson(String str) => List<SamplePosts>.from(
    json.decode(str).map((x) => SamplePosts.fromJson(x)));

String samplePostsToJson(List<SamplePosts> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class SamplePosts {
  int id;
  String title;
  String description;
  dynamic createdAt;
  dynamic updatedAt;

  SamplePosts({
    required this.id,
    required this.title,
    required this.description,
    this.createdAt,
    this.updatedAt,
  });

  factory SamplePosts.fromJson(Map<String, dynamic> json) => SamplePosts(
        id: json["id"],
        title: json["title"],
        description: json["description"],
        createdAt: json["created_at"],
        updatedAt: json["updated_at"],
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "title": title,
        "description": description,
        "created_at": createdAt,
        "updated_at": updatedAt,
      };
}
